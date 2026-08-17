import { useNavigate, useCurrentView } from '../utils/navigation.jsx'

export default function BottomNav() {
  const navigate = useNavigate()
  const currentView = useCurrentView()

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: 'fa-solid fa-house',
      action: () => navigate('home'),
    },
    {
      id: 'new',
      label: 'New',
      icon: 'fa-solid fa-dragon',
      action: () => navigate('new'),
      primary: true,
    },
    {
      id: 'library',
      label: 'Library',
      icon: 'fa-solid fa-book',
      action: () => navigate('library'),
    },
  ]

  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50">
      <div className="bg-charcoal-light/90 backdrop-blur-md border border-charcoal-lighter rounded-full shadow-2xl px-2 py-2 flex justify-around items-center">
        {navItems.map(item => {
          const isActive = currentView === item.id
          const isPrimary = item.primary

          if (isPrimary) {
            return (
              <button
                key={item.id}
                onClick={item.action}
                className="flex flex-col items-center justify-center -mt-6"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isActive
                      ? 'bg-gold text-charcoal scale-110'
                      : 'bg-burgundy text-parchment hover:bg-burgundy-dark'
                  }`}
                >
                  <i className={`${item.icon} text-xl`} />
                </div>
              </button>
            )
          }

          return (
            <button
              key={item.id}
              onClick={item.action}
              className={`flex flex-col items-center justify-center py-1 px-4 rounded-full transition ${
                isActive ? 'text-gold' : 'text-parchment-dark hover:text-parchment'
              }`}
            >
              <i className={`${item.icon} text-lg mb-0.5`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
