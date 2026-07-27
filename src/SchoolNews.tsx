import { useState } from 'react'

interface NewsItem {
  id: number
  title: string
  description: string
  imageUrl: string
  date: string
}

const initialNews: NewsItem[] = [
  {
    id: 1,
    title: 'Science Fair Winners Announced',
    description:
      'Students from grades 6 to 10 impressed judges with inventive projects focused on sustainability and community impact.',
    imageUrl:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
    date: 'July 18, 2026',
  },
  {
    id: 2,
    title: 'New Library Reading Lounge Opens',
    description:
      'The renovated reading lounge offers quiet spaces, digital resources, and collaborative study zones for all students.',
    imageUrl:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    date: 'July 12, 2026',
  },
  {
    id: 3,
    title: 'Sports Day Registration Now Open',
    description:
      'Families can now sign up for track, basketball, and team events ahead of the upcoming school sports festival.A fresh update is being prepared for students and parents with details about the next exciting campus activity.A fresh update is being prepared for students and parents with details about the next exciting campus activity.A fresh update is being prepared for students and parents with details about the next exciting campus activity.A fresh update is being prepared for students and parents with details about the next exciting campus activity.A fresh update is being prepared for students and parents with details about the next exciting campus activity.',
    imageUrl:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80',
    date: 'July 9, 2026',
  },
]

interface DescriptionWithSeeMoreProps {
  text: string
}

function DescriptionWithSeeMore({ text }: DescriptionWithSeeMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (text.length <= 150) {
    return <p className="text-sm leading-7 text-slate-600 sm:text-base">{text}</p>
  }

  return (
    <div>
      <p className="text-sm leading-7 text-slate-600 sm:text-base">
        {isExpanded ? text : `${text.slice(0, 150)}...`}
      </p>
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="mt-2 cursor-pointer text-sm font-semibold text-indigo-600 transition hover:text-indigo-700 hover:underline"
      >
        {isExpanded ? 'See less' : 'See more'}
      </button>
    </div>
  )
}

interface SchoolNewsProps {
  onBack: () => void;
  onNavigate?: (view: 'home' | 'login' | 'admin' | 'result' | 'activity' | 'latest-news' | 'school-info') => void;
}

function SchoolNews({ onBack }: SchoolNewsProps) {
  const [newsItems, setNewsItems] = useState<NewsItem[]>(initialNews)

  const handleLoadMore = () => {
    const nextItem: NewsItem = {
      id: Date.now(),
      title: 'Upcoming Campus Event',
      description:
        'A fresh update is being prepared for students and parents with details about the next exciting campus activity.',
      imageUrl:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
      date: 'Just added',
    }

    setNewsItems((prev) => [...prev, nextItem])
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 text-slate-800 sm:px-6 lg:px-8">
      <header className="mx-auto mb-6 flex max-w-5xl items-center justify-center px-2 sm:px-4">
        <button
          type="button"
          onClick={onBack}
          className="absolute left-4 rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:left-6"
        >
          Back
        </button>
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          School News
        </h1>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-4">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md md:flex-row"
          >
            <div className="h-48 w-full overflow-hidden md:h-auto md:w-2/5">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
              <div>
                <p className="mb-3 text-sm font-medium text-indigo-600">{item.date}</p>
                <h2 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h2>
                <DescriptionWithSeeMore text={item.description} />
              </div>
            </div>
          </article>
        ))}
      </main>

      <button
        type="button"
        onClick={handleLoadMore}
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-3xl font-semibold text-white shadow-lg transition hover:bg-indigo-700"
        aria-label="Load more news"
      >
        +
      </button>
    </div>
  )
}

export default SchoolNews
