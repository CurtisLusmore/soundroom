using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace soundroom
{
    public class SoundHub : Hub
    {
        public async Task Join(string room)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, room);
            await Clients.Group(room).SendAsync("join");
        }

        public async Task Send(string room, string action)
        {
            await Clients.Group(room).SendAsync("play", action);
        }
    }
}
