import { useParams } from 'react-router-dom'

function BPost() {
  const { post_id } = useParams()
  return post_id
}

export default BPost;