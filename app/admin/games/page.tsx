import { GameCard } from '@/components/admin/game-card'

export default async function AdminGamesPage() {
  // 使用静态数据代替 Supabase 查询
  const games = [
    {
      id: '1',
      title: 'Corruptbox 3',
      description: 'The ultimate music creation gaming experience',
      image_url: 'https://s.incrediboxsprunkimod.com/public/corruptbox3.webp',
      created_at: new Date().toISOString()
    }
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Games Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}