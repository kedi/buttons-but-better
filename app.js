const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.ws.on('INTERACTION_CREATE', async interaction => {
        
        let name = interaction.data.custom_id

        let GameMap = new Map([
            ["buttongartic","652630849325629460"],
            ["buttonvk","652630849325629460"],
            ["buttondc","652630849325629460"]
        ])

        let member = await client.guilds.cache.get("538038727654768652").members.fetch(interaction.member.user.id)
        if(!GameMap.has(name) || !member) return;

        let role = GameMap.get(name)
        let returnText;

        if(member.roles.cache.has(role)){
            await member.roles.remove(role)
            returnText = `Rol üzerinizden alındı`
        }else{
            await member.roles.add(role)
            returnText = `Rol üzerinize verildi`

        }
        
        client.api.interactions(interaction.id, interaction.token).callback.post({
            data: {
                type: 4,
                data: {
                    content: returnText,
                    flags: "64" // Gizli reply atmak için girmeniz gereken flag
                }
            }
        })
        
    });
});


client.login('token');
