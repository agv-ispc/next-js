const fetchCommnets = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then(res => res.json())
}

export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchCommnets(id)
  return (
    <ul style={{ background: '#444', fontSize: 'minmmax(12px, 16px)' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </li>))}
    </ul>
  )
}
