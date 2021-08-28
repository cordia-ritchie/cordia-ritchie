import Node from './Node'



function Heroku() {
    const makeName = (nodeNum) => {
        return `https://kenwe-wff-app-ae8d5-${String(nodeNum.toString(16)).padStart(2, "0")}.herokuapp.com/woof`
    }
    return (
        <span>{Array.apply(null, Array(5)).map((e, i) => {
            return <Node url={makeName(i)} nodeNum={i} />
        })}
        </span>
    )
}

export default Heroku