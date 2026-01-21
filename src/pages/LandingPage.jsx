import React, { useState, useEffect } from 'react';
import EarlyAccessModal from '../components/EarlyAccessModal';
import { Dumbbell } from 'lucide-react';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className={`w-6 h-6 ${isScrolled ? 'text-indigo-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              TVL Fitness
            </span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-colors ${
              isScrolled
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-white text-indigo-600 hover:bg-gray-100'
            }`}
          >
            Join Early Access
          </button>
        </div>
      </nav>

      {/* Section 2: Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
            {/* Left Column */}
            <div>
              <h1 className="text-5xl lg:text-[52px] font-bold leading-tight mb-6">
                Get clear form feedback during your workouts.
              </h1>
              <p className="text-xl lg:text-[20px] leading-relaxed mb-4 opacity-95">
                AI-powered analysis tracks your movements and gives you actionable cues to improve.
              </p>
              <p className="text-base mb-10 opacity-80">
                No wearables. No manual tracking. Just your phone.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-indigo-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Early Access
              </button>
            </div>

            {/* Right Column - Demo Video Placeholder */}
            <div className="bg-white/12 backdrop-blur-sm border border-white/25 rounded-[20px] p-8 h-[500px] flex flex-col items-center justify-center">
              <p className="text-[13px] uppercase tracking-wider opacity-70 mb-6">
                HOW IT LOOKS
              </p>
              <div className="text-center space-y-3 opacity-90">
                <p className="text-base">Single-angle workout</p>
                <p className="text-base">Bicep curl example</p>
                <p className="text-base">Form score: 78 → 84</p>
                <p className="text-base font-semibold">Simple cue: "Elbow stable"</p>
              </div>
              <p className="text-sm opacity-70 mt-8 text-center">
                One exercise. One camera. Clear feedback you can act on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-[48px] font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes. No equipment. No downloads.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-[60px] h-[60px] bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Open & Start</h3>
              <p className="text-gray-600 leading-relaxed">
                Launch the app, choose your exercise, and position your camera to see your full body.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-[60px] h-[60px] bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Train with AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Your AI coach tracks every movement, counts reps, and gives instant feedback to perfect your form.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-[60px] h-[60px] bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Track Progress</h3>
              <p className="text-gray-600 leading-relaxed">
                Review your workout history, see your stats, and watch your strength grow over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why It's Better */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-[48px] font-bold text-gray-900 mb-4">
              Better Than Going It Alone
            </h2>
            <p className="text-xl text-gray-600">
              Compare your options for tracking form and progress
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1: Recording Yourself */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-5xl mb-4 text-center">📹</div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Recording Yourself
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>You have to watch after</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>No live feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Hard to spot mistakes</span>
                </li>
              </ul>
            </div>

            {/* Column 2: TVL Fitness (HIGHLIGHTED) */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl transform scale-105">
              <div className="text-5xl mb-4 text-center">🎯</div>
              <h3 className="text-xl font-bold mb-6 text-center">TVL Fitness</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span>Live form cues during sets</span>
                      <span className="bg-green-500 text-white text-[11px] px-2 py-1 rounded uppercase font-semibold">
                        NOW
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span>Automatic rep counting</span>
                      <span className="bg-green-500 text-white text-[11px] px-2 py-1 rounded uppercase font-semibold">
                        NOW
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span>Progress tracked over time</span>
                      <span className="bg-green-500 text-white text-[11px] px-2 py-1 rounded uppercase font-semibold">
                        NOW
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 3: Smartwatch/Wearables */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-5xl mb-4 text-center">⌚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Smartwatch/Wearables
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Extra device required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>No form feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Only tracks activity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: What You'll Track */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-[48px] font-bold text-gray-900 mb-4">
              What You'll Track
            </h2>
            <p className="text-xl text-gray-600">
              Your progress dashboard after a few workouts
            </p>
          </div>

          <div className="max-w-[900px] mx-auto bg-white border-2 border-gray-200 rounded-[20px] p-12">
            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-4xl font-bold text-gray-900 mb-1">12</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  TOTAL WORKOUTS
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💪</div>
                <div className="text-4xl font-bold text-gray-900 mb-1">284</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  TOTAL REPS
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">Bicep Curl</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  FAVORITE EXERCISE
                </div>
              </div>
            </div>

            {/* Mini Bar Chart */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Reps - Last 7 Days
              </h3>
              <div className="flex items-end justify-between gap-2 h-[120px]">
                {[18, 32, 28, 42, 24, 48, 36].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-indigo-600 rounded-t"
                      style={{ height: `${(value / 48) * 100}%` }}
                    />
                    <span className="text-xs text-gray-500">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-400">Built with MediaPipe (Google AI)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-[40px] font-bold mb-6">
            Ready to improve your form?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join our early access program and be the first to try it.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-indigo-600 px-12 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Join Early Access
          </button>
        </div>
      </section>

      {/* Section 7: Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            &copy; 2026 TVL Fitness. Built for individuals.
          </p>
        </div>
      </footer>

      {/* Early Access Modal */}
      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default LandingPage;
