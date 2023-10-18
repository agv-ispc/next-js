import { LikeButton } from '../../LikeButton'

const fetchCommnets = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 2000))

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
    <ul style={{ background: '#D0E3CB', fontSize: 'minmmax(12px, 16px)', listStyleType: 'none' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
          <LikeButton id={comment.id} />
        </li>))}
    </ul>
  )
}
