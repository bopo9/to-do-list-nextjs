import MainComponent from '../../components/MainLayout'
import classes from "../../styles/todos.module.sass";

export default function todos(){
    return (
        <MainComponent>
            <div className={classes.wrapper}>
                <form className={classes.input_form}>
                    <input className={classes.todo_input} type="text"/>
                    <button className={classes.btn_add}><i className="gg-add"></i></button>
                </form>
                <div className={classes.todo_item + ' ' + classes.item_todo }>
                    <p className={classes.todo_text}>Сделать какое-то действие блабла </p>
                    <button className={classes.btn_close}><i className="gg-add"></i></button>
                </div>
            </div>
        </MainComponent>
    )
}