export default function ToDo({info, isDone}) {
        if (isDone === true) {
            return <li>{info}</li>
        }
}