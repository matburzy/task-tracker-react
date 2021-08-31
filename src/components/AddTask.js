import { useState } from 'react'

const AddTask = ( {onAdd} ) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
    if(!text) {
        alert('Please add a task')
        return
    }

    onAdd({ text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)



    }
    return (
        <form onSubmit={onSubmit} className="add-form">
<div className="form-control">
    <label>Task</label>
    <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Add task"></input>
</div>

<div className="form-control">
    <label>Day and Time </label>
    <input value={day} onChange={(e) => setDay(e.target.value)} type="text" placeholder="Add day and time"></input>
</div>

<div className="form-control form-control-check">
    <label>Set Reminder </label>
    <input 
    
    type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
    ></input>
</div>
<input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}

export default AddTask
