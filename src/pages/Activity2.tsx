import { Home, ArrowLeft, ArrowRight, Sun, Wind, Battery, Zap } from 'lucide-react';
import { useState } from 'react';
import A2Image from '../../Images/A2.png';
import ImageModal from '../components/ImageModal';

type Page = 'home' | 'activity1' | 'activity2' | 'activity3';

interface Activity2Props {
  onNavigate: (page: Page) => void;
}

export default function Activity2({ onNavigate }: Activity2Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const specs = [
    { label: 'Architecture', value: 'Common DC Bus' },
    { label: 'Battery Type', value: 'LiFePO4' },
    { label: 'Power Output', value: '24/7 AC' },
    { label: 'Backup', value: 'ATS (Grid/Diesel)' },
    { label: 'Load Types', value: 'Critical & Non-Critical' },
    { label: 'Controller', value: 'MPPT + Rectifier' },
  ];

  const features = [
    { icon: Sun, title: 'Solar PV Array', desc: 'Photovoltaic panels with MPPT charge controller' },
    { icon: Wind, title: 'Wind Turbine', desc: '3-phase AC rectified to DC for battery charging' },
    { icon: Battery, title: 'Energy Storage', desc: 'LiFePO4 battery bank for reliable backup' },
    { icon: Zap, title: 'Hybrid Inverter', desc: 'Seamless conversion from DC to AC power' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden dark:bg-gray-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse dark:bg-emerald-500/5" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000 dark:bg-teal-500/5" />
      </div>

      <div className="relative z-10">
        <nav className="sticky top-0 backdrop-blur-xl bg-white/80 border-b border-primary-200/50 z-50 dark:bg-gray-800/80 dark:border-gray-600/50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 text-neutral-700 hover:text-primary-600 transition-colors duration-300 group dark:text-neutral-300 dark:hover:text-primary-400"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold">Home</span>
              </button>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => onNavigate('activity1')}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <span className="text-neutral-500 dark:text-neutral-400">Activity 2 of 3</span>
                <button
                  onClick={() => onNavigate('activity3')}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full mb-6">
                <div className="flex items-center gap-1">
                  <Sun className="w-5 h-5 text-emerald-400" />
                  <Wind className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-emerald-400 font-semibold">Activity 2</span>
              </div>
              <h1 className="text-5xl font-bold text-primary-900 dark:text-primary-100 mb-4">Hybrid Solar + Wind System</h1>
              <p className="text-2xl text-emerald-400 mb-6">Rural Health Clinic</p>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Blends solar PV and wind power on a common DC bus with LiFePO4 battery storage.
                  Hybrid inverter provides reliable 24/7 AC power with automatic transfer switch for grid/diesel backup.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`animate-fade-in-up delay-${(index + 1) * 100} group`}
                >
                  <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-primary-200/50 dark:border-gray-600/50 p-6 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-primary-900 dark:text-primary-100 mb-2">{feature.title}</h3>
                      <p className="text-neutral-700 dark:text-neutral-300 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-primary-200/50 dark:border-gray-600/50 p-12 mb-16 animate-fade-in-up delay-200">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
                Why This Architecture?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                <div className="space-y-4">
                  <p>
                    Solar and wind resources are naturally complementary—solar peaks during daytime while wind often
                    picks up in the evening and overnight, creating a smoother combined power profile throughout the
                    24-hour cycle.
                  </p>
                  <p>
                    The common DC bus architecture simplifies the system by allowing both renewable sources to charge
                    a single battery bank, eliminating the need for multiple conversion stages and improving overall
                    system efficiency.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Critical loads (medical equipment, refrigeration, lighting) are prioritized through a split AC
                    distribution board, ensuring essential services remain operational even during low battery
                    conditions or maintenance.
                  </p>
                  <p>
                    The Automatic Transfer Switch (ATS) provides seamless failover to grid or diesel backup when
                    renewable generation and battery storage are insufficient, guaranteeing uninterrupted power for
                    life-critical healthcare operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-primary-200/50 dark:border-gray-600/50 p-12 mb-16 animate-fade-in-up delay-300">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
                System Explainer
              </h2>
              <div className="space-y-10">
                <div className="group">
                  <h3 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Source of Energy
                  </h3>
                  <div className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed space-y-3">
                    <p>
                      <strong className="text-primary-900 dark:text-primary-100">Solar PV:</strong> Photovoltaic panels convert sunlight directly
                      into DC electricity. Peak production occurs during midday hours with clear sky conditions,
                      typically generating the majority of daily energy during a 6-8 hour window.
                    </p>
                    <p>
                      <strong className="text-primary-900 dark:text-primary-100">Wind Turbine:</strong> A small-scale wind turbine (typically 5-10 kW
                      for this application) converts kinetic wind energy into 3-phase AC electricity. Wind patterns often
                      complement solar generation, with stronger winds during evening and overnight hours.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Conversion Process
                  </h3>
                  <div className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed space-y-3">
                    <p>
                      Solar panels connect to an MPPT (Maximum Power Point Tracking) charge controller that optimizes
                      power extraction while regulating battery charging. The MPPT continuously adjusts the electrical
                      operating point to harvest maximum available power under varying sunlight conditions.
                    </p>
                    <p>
                      The wind turbine's 3-phase AC output is rectified to DC through a dedicated rectifier with
                      dump-load regulation for overspeed protection. Both sources feed into a common DC bus (typically
                      48V or higher) that connects to the LiFePO4 battery bank.
                    </p>
                    <p>
                      A hybrid inverter converts stored DC power from the battery into clean AC power (230V/400V) for
                      the health clinic. The inverter includes sophisticated algorithms for power management, ensuring
                      smooth transitions between renewable sources, battery, and backup power.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Output & Utilization
                  </h3>
                  <div className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed space-y-3">
                    <p>
                      The system provides 24/7 AC power through a split distribution board that separates critical
                      and non-critical loads:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-primary-900 dark:text-primary-100">Critical loads:</strong> Medical equipment, vaccine refrigeration, emergency lighting, and communication systems receive priority power</li>
                      <li><strong className="text-primary-900 dark:text-primary-100">Non-critical loads:</strong> General lighting, HVAC, and office equipment can be shed during low-battery conditions</li>
                      <li><strong className="text-primary-900 dark:text-primary-100">Backup integration:</strong> ATS automatically connects grid or diesel generator when renewable sources cannot meet demand</li>
                    </ul>
                    <p>
                      An Energy Management System (EMS) monitors all power sources, battery state of charge, and load
                      demands in real-time, making intelligent decisions to optimize renewable utilization while
                      maintaining power quality and reliability.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Real-World Relevance
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                    This hybrid configuration is ideal for rural healthcare facilities where grid power is unreliable
                    or unavailable. It significantly reduces dependency on expensive diesel fuel while maintaining the
                    reliability essential for medical operations. The system can provide 2-3 days of autonomy for
                    critical loads, ensuring continuous operation during extended periods of poor weather. Over its
                    20-25 year lifespan, the system typically reduces energy costs by 60-80% compared to pure diesel
                    generation, with minimal maintenance requirements for the renewable components.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-primary-200/50 dark:border-gray-600/50 p-12 mb-16 animate-fade-in-up delay-350">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
                Block Diagram
              </h2>
              <div className="flex justify-center">
                <div
                  className="cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img src={A2Image} alt="Hybrid Solar + Wind System Block Diagram" className="max-w-full h-auto rounded-2xl border border-primary-200/50 dark:border-gray-600/50" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-900/30 dark:to-teal-900/30 backdrop-blur-sm rounded-3xl border border-emerald-700/50 dark:border-emerald-700/50 p-12 animate-fade-in-up delay-400">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
                Quick Specs
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 border border-primary-200/50 dark:border-gray-600/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{spec.label}</div>
                    <div className="text-xl font-bold text-primary-900 dark:text-primary-100">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-16 pt-8 border-t border-primary-200/50 dark:border-gray-600/50">
              <button
                onClick={() => onNavigate('activity1')}
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Previous: Biogas</span>
              </button>
              <button
                onClick={() => onNavigate('activity3')}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                <span>Next: Geothermal</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={A2Image}
        alt="Hybrid Solar + Wind System Block Diagram"
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
