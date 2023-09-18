import Link from 'next/link'

export default async function Home() {
  const posts = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 pt-16">
      <div className="grid grid-cols-6 gap-x-10 gap-2 max-w-100 w-full items-center justify-between font-mono text-sm">
        {posts.map((post) => (
          <Link className='p-6 border border-black dark:border-white' href={`/${post.id}`}> {post.title} </Link>
        ))}
      </div>
    </main>
  )
}

export async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  return res.json()
}

