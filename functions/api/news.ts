/// <reference types="@cloudflare/workers-types" />
export interface Env {
  gti_db: D1Database; // wrangler.toml ထဲက binding name နဲ့ ကိုက်ညီအောင် ရေးထားပါသည်
}

interface NewsPayload {
  title: string;
  category: string;
  content: string;
  image_url?: string;
}

// POST: Admin မှ News/Activities Data များ D1 ထဲသို့ ထည့်သွင်းခြင်း
export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;
    const body: NewsPayload = await request.json();
    
    // Required fields မပါရင် Error ပြန်ခေါ်မည်
    if (!body.title || !body.category || !body.content) {
      return new Response(JSON.stringify({ success: false, error: "Title, Category and Content are required!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const title = body.title || "";
    const category = body.category || "";
    const content = body.content || "";
    const image_url = body.image_url || "";

    // created_at ကို Database ရဲ့ CURRENT_TIMESTAMP သို့မဟုတ် SQLite Date Function အတိုင်း အလိုအလျောက် ထည့်စေပါမည်
    await env.gti_db.prepare(
      `INSERT INTO news (title, category, content, image_url) VALUES (?, ?, ?, ?)`
    ).bind(
      title, 
      category, 
      content, 
      image_url
    ).run();

    return new Response(JSON.stringify({ success: true, message: "Published successfully!" }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

// GET: Home Page သို့မဟုတ် Admin Panel တွင် Data များ ပြန်ခေါ်ယူခြင်း
export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const { env } = context;
    const { results } = await env.gti_db.prepare(
      `SELECT * FROM news ORDER BY id DESC`
    ).all();

    return new Response(JSON.stringify(results || []), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || "Failed to fetch news"}), { status: 500, headers:{"Content-Type":"application/json"},});
  }
};

// DELETE Method: ID ဖြင့် Post ဖျက်ခြင်း
export const onRequestDelete: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return new Response(JSON.stringify({ error: "Missing news ID" }), { status: 400 });
    }

    await env.gti_db.prepare("DELETE FROM news WHERE id = ?").bind(id).run();

    return new Response(JSON.stringify({ success: true, message: "News deleted successfully" }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || "Failed to delete news" }), { status: 500 });
  }
};