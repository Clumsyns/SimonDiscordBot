module.exports = class ping {
    constructor(){
            this.name = 'ping',
            this.alias = ['p'],
            this.usage = '?ping'
    }

    async run(client, message, args) {
        message.reply("PONG!!!")
    }
}
