import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Info,
  ArrowLeft,
  GraduationCap,
  Sparkles,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { POR_RULES, PARA_RULES, EXERCISES, GrammarRule, Exercise } from './constants';

type AppState = 'start' | 'learn' | 'quiz' | 'results';

export default function App() {
  const [appState, setAppState] = useState<AppState>('start');
  const [currentExercise, setCurrentExercise] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const resetQuiz = () => {
    setCurrentExercise(0);
    setScore(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setAppState('quiz');
  };

  const handleOptionSelect = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);
    if (option === EXERCISES[currentExercise].correct) {
      setScore(s => s + 1);
    }
    setShowExplanation(true);
  };

  const nextExercise = () => {
    if (currentExercise < EXERCISES.length - 1) {
      setCurrentExercise(c => c + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setAppState('results');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-200">
      <AnimatePresence mode="wait">
        {/* START SCREEN */}
        {appState === 'start' && (
          <motion.div 
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-12"
          >
            <div className="relative">
               <motion.div 
                 animate={{ rotate: [-2, 2, -2], y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 6 }}
                 className="bg-white p-6 md:p-10 rounded-[3rem] shadow-2xl border-8 border-white ring-8 ring-sky-100/50"
               >
                  <img 
                    src="https://images.unsplash.com/photo-1543167664-400ce9942c37?auto=format&fit=crop&q=80&w=600" 
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[2rem]" 
                    alt="Spanish Culture"
                  />
                  <div className="absolute -top-6 -right-6 bg-yellow-400 p-4 rounded-full shadow-xl border-4 border-white">
                    <Sparkles size={32} className="text-white" />
                  </div>
               </motion.div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none text-slate-900 drop-shadow-sm">
                POR <span className="text-sky-500">vs</span> PARA
              </h1>
              <p className="text-slate-400 font-black uppercase text-xs md:text-sm tracking-[0.4em]">
                GRAMMAR MASTERCLASS • ԻՍՊԱՆԵՐԵՆ
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <button 
                onClick={() => setAppState('learn')}
                className="flex-1 px-8 py-6 bg-white border-4 border-slate-200 rounded-3xl font-black text-xl uppercase tracking-widest hover:border-sky-500 transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <BookOpen className="text-sky-500" /> ՍՈՎՈՐԵԼ
              </button>
              <button 
                onClick={resetQuiz}
                className="flex-1 px-8 py-6 bg-sky-600 text-white rounded-3xl font-black text-xl uppercase tracking-widest hover:bg-sky-700 transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <GraduationCap /> ԹԵՍՏ
              </button>
            </div>
          </motion.div>
        )}

        {/* LEARN SCREEN */}
        {appState === 'learn' && (
          <motion.div 
            key="learn"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl mx-auto p-6 py-12 space-y-12"
          >
            <button 
              onClick={() => setAppState('start')}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-950 font-black uppercase text-xs tracking-widest transition-colors"
            >
              <ArrowLeft size={16} /> ՎԵՐԱԴԱՌՆԱԼ
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* POR SECTION */}
              <div className="space-y-6">
                <div className="bg-sky-600 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-10 -rotate-12"><Info size={120} /></div>
                   <h2 className="text-6xl font-black italic uppercase mb-2">POR</h2>
                   <p className="font-bold opacity-80 uppercase tracking-widest text-xs">ՕԳՏԱԳՈՐԾՄԱՆ ԿԱՆՈՆՆԵՐԸ</p>
                </div>
                {POR_RULES.map((rule, i) => (
                  <RuleCard key={i} rule={rule} color="sky" />
                ))}
              </div>

              {/* PARA SECTION */}
              <div className="space-y-6">
                <div className="bg-emerald-600 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-10 -rotate-12"><CheckCircle2 size={120} /></div>
                   <h2 className="text-6xl font-black italic uppercase mb-2">PARA</h2>
                   <p className="font-bold opacity-80 uppercase tracking-widest text-xs">ՕԳՏԱԳՈՐԾՄԱՆ ԿԱՆՈՆՆԵՐԸ</p>
                </div>
                {PARA_RULES.map((rule, i) => (
                  <RuleCard key={i} rule={rule} color="emerald" />
                ))}
              </div>
            </div>

            <div className="flex justify-center pt-10">
              <button 
                onClick={resetQuiz}
                className="px-12 py-8 bg-slate-900 text-white rounded-full font-black text-2xl uppercase tracking-widest hover:bg-black transition-all shadow-3xl flex items-center gap-6"
              >
                ԱՆՑՆԵԼ ԹԵՍՏԻՆ <ArrowRight size={32} />
              </button>
            </div>
          </motion.div>
        )}

        {/* QUIZ SCREEN */}
        {appState === 'quiz' && (
          <motion.div 
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl mx-auto p-6 min-h-screen flex flex-col justify-center gap-8"
          >
            <div className="flex items-center justify-between">
               <button 
                onClick={() => setAppState('start')}
                className="text-slate-400 hover:text-slate-950 transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <div className="flex items-center gap-2">
                 <div className="h-2 w-48 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-sky-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentExercise + 1) / EXERCISES.length) * 100}%` }}
                    />
                 </div>
                 <span className="font-black text-xs text-slate-400">{currentExercise + 1} / {EXERCISES.length}</span>
              </div>
            </div>

            <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border-8 border-white ring-8 ring-slate-100 flex flex-col gap-12">
               <div className="space-y-4">
                  <p className="text-xl md:text-2xl font-medium text-slate-400 italic">Իսպաներեն:</p>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight">
                    {EXERCISES[currentExercise].sentence.split('___').map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className={`inline-block min-w-[3ch] border-b-8 px-2 mx-1 ${selectedOption ? 'border-transparent text-sky-600' : 'border-sky-200 text-transparent'}`}>
                             {selectedOption || '___'}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="text-lg md:text-xl font-bold text-slate-400 pt-4 border-t-2 border-slate-50 italic">
                    {EXERCISES[currentExercise].translation}
                  </p>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  {EXERCISES[currentExercise].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleOptionSelect(opt)}
                      disabled={!!selectedOption}
                      className={`py-8 rounded-[2rem] font-black text-3xl uppercase tracking-widest transition-all ${
                        selectedOption === opt 
                          ? (opt === EXERCISES[currentExercise].correct ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white')
                          : (selectedOption ? 'bg-slate-50 text-slate-200 opacity-50' : 'bg-slate-100 text-slate-400 hover:bg-sky-50 hover:text-sky-600 hover:scale-[1.02]')
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
               </div>

               <AnimatePresence>
                 {showExplanation && (
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className={`p-10 rounded-[3rem] border-4 flex flex-col md:flex-row items-center gap-8 ${
                       selectedOption === EXERCISES[currentExercise].correct 
                         ? 'bg-emerald-50 border-emerald-100 text-emerald-900' 
                         : 'bg-rose-50 border-rose-100 text-rose-900'
                     }`}
                   >
                     <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${
                       selectedOption === EXERCISES[currentExercise].correct ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                     }`}>
                        {selectedOption === EXERCISES[currentExercise].correct ? <CheckCircle2 /> : <XCircle />}
                     </div>
                     <div className="text-center md:text-left flex-1">
                        <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-2">ԲԱՑԱՏՐՈՒԹՅՈՒՆ</p>
                        <p className="text-lg font-bold italic">{EXERCISES[currentExercise].explanation}</p>
                     </div>
                     <button 
                       onClick={nextExercise}
                       className="p-5 bg-white rounded-2xl shadow-lg border-2 border-slate-100 hover:scale-105 active:scale-95 transition-all text-slate-900"
                     >
                       <ChevronRight size={32} />
                     </button>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* RESULTS SCREEN */}
        {appState === 'results' && (
          <motion.div 
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-12"
          >
            <div className="relative">
               <motion.div 
                 animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-[5rem] flex items-center justify-center shadow-3xl border-8 border-sky-100"
               >
                  <Trophy size={140} className="text-yellow-400" />
               </motion.div>
               <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-sky-600 text-white px-10 py-4 rounded-full font-black text-2xl shadow-xl border-4 border-white whitespace-nowrap">
                  {score === EXERCISES.length ? 'ՀԻԱՆԱԼԻ Է!' : 'ԼԱՎ ԱՇԽԱՏԱՆՔ!'}
               </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-slate-800 leading-none">
                {score} <span className="text-sky-200">/</span> {EXERCISES.length}
              </h2>
              <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-sm">ՃԻՇՏ ՊԱՏԱՍԽԱՆՆԵՐ</p>
            </div>

            <div className="flex gap-4 w-full max-w-md">
               <button 
                onClick={() => setAppState('start')}
                className="flex-1 py-8 bg-white border-4 border-slate-200 rounded-3xl font-black text-xl uppercase tracking-widest hover:border-sky-500 transition-all flex items-center justify-center gap-3"
              >
                <ArrowLeft /> ՄԵՆՅՈՒ
              </button>
              <button 
                onClick={resetQuiz}
                className="flex-1 py-8 bg-sky-600 text-white rounded-3xl font-black text-xl uppercase tracking-widest hover:bg-sky-700 transition-all shadow-3xl flex items-center justify-center gap-3 border-b-8 border-sky-800"
              >
                <RotateCcw /> ԿՐԿՆԵԼ
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RuleCard({ rule, color }: { rule: GrammarRule; color: 'sky' | 'emerald' }) {
  const bgColor = color === 'sky' ? 'bg-sky-50' : 'bg-emerald-50';
  const borderColor = color === 'sky' ? 'border-sky-100' : 'border-emerald-100';
  const textColor = color === 'sky' ? 'text-sky-600' : 'text-emerald-600';
  const accentColor = color === 'sky' ? 'text-sky-800' : 'text-emerald-800';

  return (
    <div className={`p-8 rounded-[2.5rem] border-4 ${bgColor} ${borderColor} space-y-4 relative overflow-hidden group hover:scale-[1.02] transition-all`}>
       <div className="flex items-center justify-between mb-2">
          <h4 className={`text-xl font-black italic uppercase ${accentColor}`}>{rule.title}</h4>
          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-2 ${borderColor} ${textColor}`}>
            {rule.useCase}
          </span>
       </div>
       <div className="space-y-4">
          {rule.examples.map((ex, i) => (
             <div key={i} className="bg-white/60 p-4 rounded-2xl border-2 border-white/40">
                <p className="text-xl font-bold text-slate-800 mb-1">{ex.es}</p>
                <p className="text-sm font-medium text-slate-400 italic">{ex.hy}</p>
             </div>
          ))}
       </div>
    </div>
  );
}
