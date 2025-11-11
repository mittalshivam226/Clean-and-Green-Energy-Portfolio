import { Home, ArrowLeft, ArrowRight, Droplets, Zap, Recycle, Leaf } from 'lucide-react';
import { useState } from 'react';
import A1Image from '../../Images/A1.png';
import ImageModal from '../components/ImageModal';

type Page = 'home' | 'activity1' | 'activity2' | 'activity3';

interface Activity1Props {
  onNavigate: (page: Page) => void;
}

export default function Activity1({ onNavigate }: Activity1Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const specs = [
    { label: 'Process Type', value: 'Mesophilic Anaerobic Digestion' },
    { label: 'Temperature', value: '~35°C' },
    { label: 'HRT', value: '30-40 days' },
    { label: 'Daily Manure', value: '1,000-1,500 kg' },
    { label: 'Biogas Output', value: '30-52 m³/day' },
    { label: 'Methane Content', value: '55-70%' },
  ];

  const benefits = [
    { icon: Zap, title: 'Clean Energy Production', desc: 'Transforms dairy waste into usable heat and electricity.' },
    { icon: Recycle, title: 'Sustainable Fertilizer Source', desc: 'Digestate acts as an organic soil conditioner, improving fertility and structure.' },
    { icon: Leaf, title: 'Reduced Emissions', desc: 'Mitigates methane release and lowers the farm\'s overall greenhouse gas footprint.' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden dark:bg-gray-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse dark:bg-primary-500/5" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000 dark:bg-secondary-500/5" />
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
                <span className="text-neutral-500 dark:text-neutral-400">Activity 1 of 3</span>
                <button
                  onClick={() => onNavigate('activity2')}
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
                <Droplets className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Activity 1</span>
              </div>
              <h1 className="text-5xl font-bold text-primary-900 dark:text-primary-100 mb-4">Biogas System</h1>
              <p className="text-2xl text-emerald-400 mb-6">100-Cattle Dairy Farm</p>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  This biogas system harnesses dairy manure from a 100-cattle farm to produce clean, renewable energy through mesophilic anaerobic digestion operating at approximately 35°C with a hydraulic retention time (HRT) of 30–40 days.
                  The process converts organic waste into biogas, which can be utilized for electricity and heat generation, and digestate, a nutrient-rich byproduct that enhances soil fertility.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`animate-fade-in-up delay-${(index + 1) * 100} group`}
                >
                  <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-200/50 p-8 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-primary-900 dark:text-primary-100 mb-3">{benefit.title}</h3>
                      <p className="text-neutral-700 dark:text-neutral-300">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 bg-white/80 backdrop-blur-sm rounded-3xl border border-primary-200/50 p-12 mb-16 animate-fade-in-up delay-200 dark:bg-gray-800/80 dark:border-gray-600/50">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
                Why This Design Works
              </h2>
              <div className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed space-y-4">
                <p>
                  Cattle manure is an exceptional feedstock for biogas production due to its high biodegradable organic content and stable composition.
                </p>
                <p>
                  The system incorporates an integrated gas treatment train to eliminate impurities such as moisture, hydrogen sulfide, and siloxanes, ensuring efficient and safe energy utilization.
                </p>
                <p>
                  Multiple utilization pathways enhance versatility, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Combined Heat and Power (CHP) units for concurrent electricity and thermal energy.</li>
                  <li>Direct combustion for process or space heating.</li>
                  <li>Upgrading to bio-CNG, enabling its use as a clean vehicle fuel.</li>
                </ul>
                <p>
                  Safety and reliability are maintained through:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pressure relief valves and flame arrestors.</li>
                  <li>Gas leak detection systems and emergency shutdown mechanisms.</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 bg-white/80 backdrop-blur-sm rounded-3xl border border-primary-200/50 p-12 mb-16 animate-fade-in-up delay-300 dark:bg-gray-800/80 dark:border-gray-600/50">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
                System Process Explained
              </h2>
              <div className="space-y-10">
                <div className="group">
                  <h3 className="text-2xl font-semibold text-emerald-600 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    1. Energy Source
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                    A 100-head dairy cattle operation produces approximately 1,000-1,500 kg of manure per day.
                    This organic waste contains high levels of biodegradable material, primarily consisting of
                    undigested feed, cellulose, and other organic compounds that serve as excellent substrate for
                    anaerobic microorganisms.
                  </p>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-emerald-600 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    2. Conversion Process
                  </h3>
                  <div className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed space-y-3">
                    <p>
                      The manure is collected and diluted to achieve optimal total solids content (typically 8-12%),
                      then fed continuously or semi-continuously into a mesophilic anaerobic digester maintained at
                      approximately 35°C.
                    </p>
                    <p>
                      Inside the digester, a complex community of microorganisms breaks down the organic matter through
                      multiple stages: hydrolysis, acidogenesis, acetogenesis, and finally methanogenesis, producing
                      biogas composed primarily of methane (55-70%) and carbon dioxide.
                    </p>
                    <p>
                      The biogas undergoes conditioning to remove moisture, hydrogen sulfide, and siloxanes before
                      utilization. The remaining digestate is separated into liquid and solid fractions for use as
                      nutrient-rich fertilizer.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-emerald-600 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    3. Output & Utilization
                  </h3>
                  <div className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed space-y-3">
                    <p>
                      The system produces 30-52 cubic meters of biogas per day, which can be utilized in multiple ways:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Combined Heat and Power (CHP) gensets for simultaneous electricity and heat production</li>
                      <li>Direct burners for space heating or process heat applications</li>
                      <li>Bio-CNG upgrading for use as vehicle fuel</li>
                      <li>Digestate separation producing liquid fertilizer and solid compost</li>
                    </ul>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-emerald-600 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    4. Real-World Relevance
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                    This biogas system significantly reduces operational expenses by converting waste into valuable
                    energy and fertilizer products. It creates new revenue streams while reducing disposal costs and
                    energy bills. The system is highly scalable, suitable for farms ranging from 50 to thousands of
                    cattle, and includes comprehensive safety features including pressure monitoring, gas detection,
                    and emergency shut-off systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 bg-white/80 backdrop-blur-sm rounded-3xl border border-primary-200/50 p-12 mb-16 animate-fade-in-up delay-350 dark:bg-gray-800/80 dark:border-gray-600/50">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
                Block Diagram
              </h2>
              <div className="flex justify-center">
                <div
                  className="cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img src={A1Image} alt="Biogas System Block Diagram" className="max-w-full h-auto rounded-2xl border border-primary-200/50 dark:border-gray-600/50" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 bg-white/80 backdrop-blur-sm rounded-3xl border border-primary-200/50 p-12 animate-fade-in-up delay-400 dark:bg-gray-800/80 dark:border-gray-600/50">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full" />
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

            <div className="flex items-center justify-between mt-16 pt-8 border-t border-slate-700/50">
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </button>
              <button
                onClick={() => onNavigate('activity2')}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                <span>Next: Solar + Wind</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={A1Image}
        alt="Biogas System Block Diagram"
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
