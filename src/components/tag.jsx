function Tags({ role }) {
    return <>
        <h4 className={`border w-fit px-3 rounded-lg ${role=="doctor" ? "bg-green-400" : "bg-amber-300"}`}>{role}</h4>
    </>
}

export default Tags;