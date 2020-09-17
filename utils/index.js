module.exports = {
    updatePlayerCount: (client, seconds) => {
        const interval = setInterval(function setStatus() {
            //> 20 players
            let status = `${GetNumPlayerIndices()} player(s)`
            client.user.setActivity(status, {type: "WTCHING"})
            return setStatus
        }(), seconds * 1000)
    }
}