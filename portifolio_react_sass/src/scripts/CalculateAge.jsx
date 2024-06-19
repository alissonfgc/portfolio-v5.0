const CalculateAge = () => {

    const dateofbirth = new Date('6/7/2000')
    var todaysdate = new Date()

    function age(dateofbirth, todaysdate) {
        var differenceyears = todaysdate.getFullYear() - dateofbirth.getFullYear();
        if (new Date(todaysdate.getFullYear(), todaysdate.getMonth(), todaysdate.getDate()) <
            new Date(todaysdate.getFullYear(), dateofbirth.getMonth(), dateofbirth.getDate()))
            differenceyears--
        return differenceyears
    }

    return (
        <var> {age(dateofbirth, todaysdate)} </var>
    )
}

export default CalculateAge