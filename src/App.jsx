import React, { useState } from 'react';
import { Phone, BookOpen, Users, Heart, ArrowLeft, Calendar, AlertCircle, MapPin } from 'lucide-react';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [checkedIn, setCheckedIn] = useState(false);

  // Cores de alto contraste e identidade visual amigável
  const colors = {
    primary: 'bg-blue-600',
    secondary: 'bg-green-600',
    urgent: 'bg-red-600',
    social: 'bg-purple-600',
    background: 'bg-gray-50',
    text: 'text-gray-900'
  };

  // Simulação de dados
  const rights = [
    { title: 'Transporte Gratuito', desc: 'A partir de 65 anos, basta apresentar RG.' },
    { title: 'Prioridade em Filas', desc: 'Lei garante atendimento prioritário em bancos e órgãos.' },
    { title: 'Medicamentos', desc: 'Programa Farmácia Popular oferece remédios grátis.' }
  ];

  const events = [
    { title: 'Ginástica na Praça', date: 'Hoje, 16h', loc: 'Praça Central' },
    { title: 'Oficina de Celular', date: 'Amanhã, 14h', loc: 'Centro Comunitário' }
  ];

  const handleCheckIn = () => {
    setCheckedIn(true);
    // Aqui haveria uma chamada para o backend (Firebase)
    setTimeout(() => setCheckedIn(false), 5000); // Reset visual após 5s
  };

  const Navigation = () => (
    <div className="w-full bg-white p-4 shadow-md flex items-center mb-4 sticky top-0 z-10">
      {currentScreen !== 'home' && (
        <button 
          onClick={() => setCurrentScreen('home')}
          className="mr-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
          aria-label="Voltar para o início"
        >
          <ArrowLeft size={32} />
        </button>
      )}
      <h1 className="text-2xl font-bold text-gray-800">
        {currentScreen === 'home' ? 'Olá, Dona Maria!' : 
         currentScreen === 'rights' ? 'Meus Direitos' :
         currentScreen === 'social' ? 'Eventos e Amigos' : 'Emergência'}
      </h1>
    </div>
  );

  const BigButton = ({ icon: Icon, label, color, onClick, subtext }) => (
    <button
      onClick={onClick}
      className={`${color} w-full text-white p-6 rounded-2xl shadow-lg hover:brightness-110 active:scale-95 transition-all mb-4 flex flex-col items-center justify-center min-h-[140px] border-4 border-transparent focus:border-yellow-400 outline-none`}
    >
      <Icon size={48} className="mb-2" />
      <span className="text-2xl font-bold">{label}</span>
      {subtext && <span className="text-sm mt-1 opacity-90">{subtext}</span>}
    </button>
  );

  const RenderScreen = () => {
    switch(currentScreen) {
      case 'home':
        return (
          <div className="flex flex-col gap-2">
            <div className="bg-blue-100 p-4 rounded-xl mb-4 border-l-4 border-blue-600">
              <p className="text-lg text-blue-900 font-medium">Hoje é Quarta-feira, 25 de Outubro</p>
            </div>

            {/* Funcionalidade de Check-in Diário (Engajamento Social) */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-4 border border-gray-200">
              <p className="text-xl text-center mb-3 font-semibold text-gray-700">Como você está hoje?</p>
              {checkedIn ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center font-bold text-xl animate-bounce">
                   Tudo ótimo! Já avisamos sua família.
                </div>
              ) : (
                <button 
                  onClick={handleCheckIn}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl text-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Heart size={28} />
                  Estou Bem! (Marcar Presença)
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <BigButton 
                icon={BookOpen} 
                label="Meus Direitos" 
                subtext="Benefícios e Leis"
                color={colors.primary} 
                onClick={() => setCurrentScreen('rights')} 
              />
              <BigButton 
                icon={Users} 
                label="Atividades" 
                subtext="Encontros e Oficinas"
                color={colors.social} 
                onClick={() => setCurrentScreen('social')} 
              />
              <BigButton 
                icon={Phone} 
                label="Telefones Úteis" 
                subtext="Emergência e Conselho"
                color={colors.urgent} 
                onClick={() => setCurrentScreen('emergency')} 
              />
            </div>
          </div>
        );

      case 'rights':
        return (
          <div className="space-y-4">
            {rights.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md border-l-8 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed">{item.desc}</p>
                <button className="mt-4 text-blue-600 font-bold text-lg flex items-center gap-2">
                  🔊 Ouvir Texto
                </button>
              </div>
            ))}
          </div>
        );

      case 'social':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Próximos Eventos</h2>
            {events.map((evt, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl shadow-md flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                  <Calendar size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{evt.title}</h3>
                  <p className="text-lg text-gray-600 flex items-center gap-2 mt-1">
                    ⏰ {evt.date}
                  </p>
                  <p className="text-lg text-gray-600 flex items-center gap-2">
                    <MapPin size={20} /> {evt.loc}
                  </p>
                  <button className="mt-3 bg-purple-600 text-white px-6 py-2 rounded-lg text-lg font-medium">
                    Confirmar Presença
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'emergency':
        return (
          <div className="space-y-4 text-center">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-6">
              <AlertCircle size={64} className="text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-red-700 mb-2">Precisa de Ajuda?</h2>
              <p className="text-xl text-gray-700">Clique abaixo para ligar imediatamente.</p>
            </div>
            
            <button className="w-full bg-red-600 text-white p-6 rounded-2xl shadow-lg text-3xl font-bold mb-4 flex items-center justify-center gap-4">
              <Phone size={40} /> SAMU (192)
            </button>
            <button className="w-full bg-gray-700 text-white p-6 rounded-2xl shadow-lg text-2xl font-bold flex items-center justify-center gap-4">
              <Users size={32} /> Falar com Conselho
            </button>
            <button className="w-full bg-green-600 text-white p-6 rounded-2xl shadow-lg text-2xl font-bold flex items-center justify-center gap-4">
              <Phone size={32} /> Ligar para Filho(a)
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${colors.background} font-sans pb-8`}>
      <div className="max-w-md mx-auto min-h-screen bg-gray-50 shadow-2xl overflow-hidden relative">
        <Navigation />
        <main className="p-4">
          <RenderScreen />
        </main>
      </div>
    </div>
  );
};

export default App;