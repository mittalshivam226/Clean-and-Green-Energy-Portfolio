import { Home, ArrowLeft, Thermometer, Zap, Droplets, Shield } from 'lucide-react';
import { useState } from 'react';
import ACTIVITY3Image from '../../Images/ACTIVITY3.png';
import ImageModal from '../components/ImageModal';

type Page = 'home' | 'activity1' | 'activity2' | 'activity3';

interface Activity3Props {
  onNavigate: (page: Page) => void;
}

export default function Activity3({ onNavigate }: Activity3Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const specs = [
    { label: 'High Temp Cycle', value: 'Flash Steam >180°C' },
    { label: 'Medium Temp Cycle', value: 'Binary/ORC (120-180°C)' },
    { label: 'Reservoir Type', value: 'Liquid-Dominated' },
    { label: 'Reinjection', value: 'Closed-Loop' },
    { label: 'Gas Treatment', value: 'H₂S & Silica Control' },
    { label: 'Output Type', value: 'Baseload Electricity' },
  ];

  const features = [
    { icon: Thermometer, title: 'Hot Brine Wells', desc: 'Extract geothermal fluid from deep reservoirs' },
    { icon: Zap, title: 'Dual Conversion', desc: 'Flash steam and binary ORC pathways' },
    { icon: Droplets, title: 'Closed-Loop', desc: 'Reinjection maintains reservoir pressure' },
    { icon: Shield, title: 'Equipment Protection', desc: 'H₂S/silica control systems' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden dark:bg-gray-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse dark:bg-red-500/5" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000 dark:bg-rose-500/5" />
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
                  onClick={() => onNavigate('activity2')}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <span className="text-neutral-500 dark:text-neutral-400">Activity 3 of 3</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full mb-6">
                <Thermometer className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-semibold">Activity 3</span>
              </div>
              <h1 className="text-5xl font-bold text-primary-900 dark:text-primary-100 mb-4">Geothermal Power Plant</h1>
              <p className="text-2xl text-red-400 mb-6">Hot-Water Wells</p>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  This geothermal power plant intelligently adapts its conversion cycle to match the temperature and characteristics of the geothermal resource.
                  For high-temperature brine sources (T {'>'} 180°C), it operates in a flash steam cycle, using separated steam to drive a turbine.
                  For moderate-temperature reservoirs (120–180°C), it employs a binary Organic Rankine Cycle (ORC), using a low-boiling working fluid to extract heat efficiently.

                  The system's closed-loop reinjection sustains reservoir pressure and chemistry over the long term, while H₂S and silica management prevent corrosion and scaling.
                  Climate-optimized air-cooled condensers (ACC) or cooling towers ensure effective heat rejection and equipment protection.
                  At the grid interface, standard step-up transformers, a switchyard, and EMS-integrated protective relays enable stable, reliable power export.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`animate-fade-in-up delay-${(index + 1) * 100} group`}
                >
                  <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-primary-200/50 dark:border-gray-600/50 p-6 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-primary-900 dark:text-primary-100 mb-2">{feature.title}</h3>
                      <p className="text-neutral-700 dark:text-neutral-300 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-rose-500/10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-primary-200/50 dark:border-gray-600/50 p-12 mb-16 animate-fade-in-up delay-200">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-rose-600 rounded-full" />
                Why This Architecture?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                <div className="space-y-4">
                  <p>
                    The conversion path is selected based on reservoir temperature to maximize efficiency. High-temperature
                    brine (less than 180°C) uses flash steam technology where pressure reduction causes the brine to flash into
                    steam that drives turbines directly.
                  </p>
                  <p>
                    For moderate temperatures (120-180°C), a binary or Organic Rankine Cycle (ORC) system transfers heat
                    to a secondary working fluid with a lower boiling point, enabling efficient power generation from lower-grade
                    geothermal resources.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Closed-loop reinjection returns cooled brine back into the reservoir, maintaining pressure and
                    extending the productive life of the geothermal field. This sustainable approach ensures decades
                    of continuous operation.
                  </p>
                  <p>
                    Equipment protection through H₂S scrubbing and silica scale prevention is critical for long-term
                    reliability. Grid-ready design with standard step-up transformers and switchyard enables seamless
                    integration with existing electrical infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-rose-500/10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-primary-200/50 dark:border-gray-600/50 p-12 mb-16 animate-fade-in-up delay-300">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-rose-600 rounded-full" />
                System Explainer
              </h2>
              <div className="space-y-10">
                <div className="group">
                  <h3 className="text-2xl font-semibold text-red-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Source of Energy
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                    Geothermal energy originates from Earth's internal heat, stored in underground reservoirs of hot water and steam.
                    Production wells access these liquid-dominated reservoirs at depths of 1,000–3,000 meters, where natural geothermal fluids
                    are maintained under high pressure. The temperature profile of the resource dictates the conversion approach:
                    flash steam cycles for high-temperature brine (T {'>'} 180°C) and binary/ORC systems for moderate-temperature resources (120–180°C).
                    This temperature-dependent selection ensures optimal efficiency and resource utilization across varying geothermal conditions.
                  </p>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-red-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Conversion Process
                  </h3>
                  <div className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed space-y-3">
                    <p>
                      The geothermal power plant employs dual conversion pathways optimized for different temperature ranges. For high-temperature brine (T {'>'} 180°C), the system uses a flash steam cycle where hot brine is depressurized in a separator, causing it to flash into steam that drives a steam turbine connected to a generator. The separated brine and condensed steam are reinjected to maintain reservoir pressure.
                    </p>
                    <p>
                      For moderate-temperature resources (120–180°C), a binary Organic Rankine Cycle (ORC) is utilized. Geothermal brine transfers heat to a secondary working fluid with a lower boiling point (e.g., isopentane or R-245fa) in a heat exchanger. This working fluid vaporizes, expands through a turbine to generate electricity, and then condenses in a cooling system before recirculating. The geothermal fluid remains isolated in a closed loop, preventing turbine contact.
                    </p>
                    <p>
                      Both conversion paths incorporate gas extraction to remove non-condensable gases (CO₂, H₂S), silica control to mitigate scaling, and corrosion-resistant materials. Cooling systems, such as air-cooled condensers or wet cooling towers, are selected based on local water availability and environmental considerations to ensure efficient heat rejection.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-red-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Output / Utilization
                  </h3>
                  <div className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed space-y-3">
                    <p>
                      The geothermal power plant generates continuous baseload electricity, characterized by exceptional reliability and high capacity factors of 90-95%. This stable output complements intermittent renewable sources like solar and wind, providing dispatchable power that can be ramped within operational limits. The generated electricity at 11-15 kV is stepped up to transmission voltages (69-230 kV) for grid integration through standard transformers and switchyard infrastructure.
                    </p>
                    <p>
                      Key performance attributes include predictable baseload supply, minimal variability, and long operational lifetimes of 30-50+ years. The system's design ensures seamless grid compatibility with protective relays and energy management systems (EMS) for stable power export. Cooled geothermal brine (40-80°C) is reinjected into the reservoir via dedicated wells, maintaining pressure and enabling sustainable resource management over decades of operation.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-red-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Real-World Relevance
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                    Geothermal power plants deliver low-carbon, reliable baseload electricity that complements intermittent renewables like solar and wind. With lifecycle emissions comparable to wind power (15-50 g CO₂-eq/kWh), geothermal provides continuous 24/7 clean energy without storage needs. Nations such as Iceland, Kenya, New Zealand, and the Philippines harness significant geothermal capacity. Enhanced geothermal systems (EGS) are broadening accessibility beyond volcanic areas, enabling global deployment in diverse geological settings.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-rose-500/10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-primary-200/50 dark:border-gray-600/50 p-12 mb-16 animate-fade-in-up delay-350">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-rose-600 rounded-full" />
                Block Diagram (Concept Overview)
              </h2>
              <div className="flex justify-center">
                <div
                  className="cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img src={ACTIVITY3Image} alt="Geothermal Power Plant Block Diagram" className="max-w-full h-auto rounded-2xl border border-primary-200/50 dark:border-gray-600/50" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-rose-500/10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-primary-200/50 dark:border-gray-600/50 p-12 animate-fade-in-up delay-400">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-rose-600 rounded-full" />
                Quick Specs
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white/80 dark:bg-gray-700/50 rounded-xl p-6 border border-primary-200/50 dark:border-gray-600/50 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{spec.label}</div>
                    <div className="text-xl font-bold text-primary-900 dark:text-primary-100">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-16 pt-8 border-t border-slate-700/50">
              <button
                onClick={() => onNavigate('activity2')}
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Previous: Solar + Wind</span>
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
              >
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={ACTIVITY3Image}
        alt="Geothermal Power Plant Block Diagram"
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
