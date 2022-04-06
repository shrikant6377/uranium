let today = new Date()

const printDate = ()=>{
    const today = new Date()
    console.log("today's date is: " + today.getDate())
}

const printMonth = () => {
    console.log("current month is: " + today.getMonth)
}

const getBatchInfo = () => {
    console.log('Uranium, week2, day16, the topic for today is nodejs module system & npm packages')
}

module.exports = {printDate, printMonth, getBatchInfo}