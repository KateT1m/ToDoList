import styles from "./contollerTab.module.scss"

interface IControllerTab {
    children: React.ReactNode
}

export const ControllerTab: React.FC<IControllerTab> = ( { children } ) => {
    return (
        <div className={styles.controllerTab}>
          {children}
        </div>
    )
}