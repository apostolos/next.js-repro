import { action } from './actions';

export default function LoginPage() {
  return (
    <form action={action}>
      <button type="submit">Submit</button>
    </form>
  )
}