

export default async function Post( {params} ) {
    const post = await getData( params.id )
    if (post.userId != 10)
    {
        return (
            <div className='flex min-h-screen flex-col items-center p-5'>
                <div className="my-12">
                    {post.id}
                </div>
                <div>
                    {post.title}
                </div>
                <div>
                    {post.body}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='flex min-h-screen flex-col items-center p-5'>
                <div className="my-12">
                    This is private!
                </div>
            </div>
        )
    }
}

export async function getData( id ) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  
    return res.json()
  }
  