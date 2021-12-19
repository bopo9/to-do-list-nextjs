import MainComponent from '../../components/MainLayout'
import classes from "../../styles/todos.module.sass";

export default function todos(){
    return (
        <MainComponent>
            <div className={classes.wrapper}>
                <div className={classes.todo_item}>
                    <p className={classes.todo_text}>Сделать какое-то действие блабла </p>
                    <button className={classes.btn_close}>Delete</button>
                </div>
            </div>
        </MainComponent>
    )
}