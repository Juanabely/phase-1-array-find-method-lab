superbowlWin = (record) => {
    const result = record.find(record => record.result === "W" );
    if(result){
        return result.year;
    }
    return undefined;}