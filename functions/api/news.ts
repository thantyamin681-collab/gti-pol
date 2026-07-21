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
    const { title, category, content, image_url } = body;

    // wrangler.toml ထဲက binding name "gti_db" ကို သုံးထားပါသည်
    await env.gti_db.prepare(
      `INSERT INTO news (title, category, content, image_url, created_at) VALUES (?, ?, ?, ?, ?)`
    ).bind(
      title, 
      category, 
      content, 
      image_url || '', 
      new Date().toISOString().split('T')[0]
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

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};