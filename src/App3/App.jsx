import Student from './student';

function App3() {
    return(
        <>
        <Student name="BroCode" age="19" isStudent={true}/>
        <Student name="larry" age={50}  isStudent={false}/>
        <Student name="garry" age="69" isStudent={true}/>
        <Student/>
        </>
        
    )
}

export default App3;