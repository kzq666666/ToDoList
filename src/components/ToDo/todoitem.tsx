import './style.less'

type ToDoItemProps = {
    content: String,
    isFinish?: Boolean,
}

export default function ToDoItem(props: ToDoItemProps) {
    const { content } = props
    return <div className="todoitem">
        <input type="checkbox" name="" id="" />
        {content}
    </div>
} 