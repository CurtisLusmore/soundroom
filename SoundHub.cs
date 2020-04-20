using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace soundroom
{
    public class SoundHub : Hub
    {
        public async Task Send(string action)
        {
            await Clients.All.SendAsync("play", action);
        }
    }
}
