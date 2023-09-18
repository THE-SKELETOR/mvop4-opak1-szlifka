

export default async function Post( {params} ) {
    const post = await getData( params.id )
    return (
        <div className='flex min-h-screen flex-col items-center p-5'>
            <div className="my-12">
                {post.title}
            </div>
            <div>
                {post.body}
            </div>
        </div>
    )
}

export async function getData( id ) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  
    return res.json()
  }
  