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
                  This hybrid renewable setup combines solar PV for daytime generation with wind energy during evenings and monsoon periods, both feeding into a shared DC bus.
                  The design balances power supply throughout the day without oversizing either source.
                  A LiFePO₄ battery bank ensures round-the-clock autonomy, while a hybrid inverter/charger delivers clean AC power, supports islanding, and enables black-start capability.
                  An Automatic Transfer Switch (ATS) connects grid or diesel backup only when the battery's state-of-charge (SoC) reaches low thresholds.
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
              <div className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed space-y-6">
                <p>
                  The system leverages complementary resources — solar power during the day and wind energy during evenings or monsoon months — feeding a single DC bus via independent controllers (MPPT for PV, rectifier + dump load for wind).
                  This synergy smooths energy availability and avoids costly oversizing of individual systems.
                </p>
                <p>
                  The LiFePO₄ battery provides clean, stable nighttime power, while the hybrid inverter maintains reliable AC output, enables island operation, and restarts the system autonomously.
                  The ATS brings grid or diesel power online only when the battery SoC falls below safe limits.
                  By separating critical (vaccine cold-chain, lighting, communication) and non-critical loads, the EMS can shift high-demand activities to solar-peak hours and shed less-essential loads during resource shortages — resulting in high uptime, low diesel use, and scalable future growth.
                </p>
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
                      Solar irradiance provides consistent daytime generation.
                    </p>
                    <p>
                      Wind regimes in the evenings and monsoon season complement solar production, flattening variability across diurnal and seasonal cycles.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Conversion Process
                  </h3>
                  <div className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed space-y-3">
                    <p>
                      PV arrays → MPPT controller → DC bus
                    </p>
                    <p>
                      Wind turbines → Rectifier/controller → DC bus
                    </p>
                    <p>
                      DC bus → LiFePO₄ battery (BMS-managed)
                    </p>
                    <p>
                      Hybrid inverter/charger → regulated AC output
                    </p>
                    <p>
                      ATS → controlled grid/diesel fallback
                    </p>
                    <p>
                      EMS → manages SoC thresholds, scheduling, and system alarms
                    </p>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Output & Utilization
                  </h3>
                  <div className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed space-y-3">
                    <p>
                      Critical loads (vaccine cold-chain, lighting, communication) receive priority power.
                    </p>
                    <p>
                      Non-critical loads (HVAC, office equipment) can be shed during low-battery conditions.
                    </p>
                    <p>
                      ATS connects grid or diesel when renewables fall short.
                    </p>
                    <p>
                      EMS optimizes scheduling, load shedding, and backup integration for maximum reliability.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Real-World Relevance
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                    Rural healthcare facilities benefit from reduced diesel dependency and high reliability.
                    Critical loads maintain autonomy for 2-3 days during poor weather.
                    60-80% cost savings over 20-25 year lifespan vs. pure diesel.
                    Minimal maintenance on renewable components.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-primary-200/50 dark:border-gray-600/50 p-12 mb-16 animate-fade-in-up delay-350">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
                Block Diagram (Concept Overview)
              </h2>
              <div className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed space-y-4">
                <p>
                  Solar PV connects through MPPT controllers and wind turbines through a rectifier to a common DC bus.
                </p>
                <p>
                  The DC bus charges the LiFePO₄ battery, which is supervised by a Battery Management System (BMS).
                </p>
                <p>
                  A hybrid inverter/charger converts DC to AC for connected loads.
                </p>
                <p>
                  The ATS integrates grid or diesel supply when required.
                </p>
                <p>
                  The AC distribution board (ACDB) separates critical and non-critical circuits.
                </p>
                <p>
                  The EMS continuously manages performance, protection, and alerts.
                </p>
              </div>
              <div className="flex justify-center mt-8">
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
