import { LikeButton } from '../../LikeButton'

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
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
          <LikeButton id={comment.id} />
        </li>))}
    </ul>
  )
}
