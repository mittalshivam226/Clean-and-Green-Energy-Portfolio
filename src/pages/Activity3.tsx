import { Home, ArrowLeft, Thermometer, Zap, Droplets, Shield } from 'lucide-react';

type Page = 'home' | 'activity1' | 'activity2' | 'activity3';

interface Activity3Props {
  onNavigate: (page: Page) => void;
}

export default function Activity3({ onNavigate }: Activity3Props) {
  const specs = [
    { label: 'High Temp Cycle', value: 'Flash Steam (>180°C)' },
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
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        <nav className="sticky top-0 backdrop-blur-xl bg-slate-900/80 border-b border-slate-700/50 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 text-slate-300 hover:text-red-400 transition-colors duration-300 group"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold">Home</span>
              </button>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => onNavigate('activity2')}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-red-600 text-white rounded-lg transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <span className="text-slate-400">Activity 3 of 3</span>
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
              <h1 className="text-5xl font-bold text-white mb-4">Geothermal Power Plant</h1>
              <p className="text-2xl text-red-400 mb-6">Hot-Water Wells</p>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-slate-300 leading-relaxed">
                  Converts geothermal energy through flash steam for high-temperature brine (&gt;180°C) and binary/ORC
                  for moderate temperatures (120-180°C). Features closed-loop reinjection with H₂S/silica control.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`animate-fade-in-up delay-${(index + 1) * 100} group`}
                >
                  <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-12 mb-16 animate-fade-in-up delay-200">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-rose-600 rounded-full" />
                Why This Architecture?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-slate-300 text-lg leading-relaxed">
                <div className="space-y-4">
                  <p>
                    The conversion path is selected based on reservoir temperature to maximize efficiency. High-temperature
                    brine (&gt;180°C) uses flash steam technology where pressure reduction causes the brine to flash into
                    steam that drives turbines directly.
                  </p>
                  <p>
                    For moderate temperatures (120-180°C), a binary or Organic Rankine Cycle (ORC) system transfers heat
                    to a working fluid with a lower boiling point, enabling efficient power generation from lower-grade
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

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-12 mb-16 animate-fade-in-up delay-300">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-rose-600 rounded-full" />
                System Explainer
              </h2>
              <div className="space-y-10">
                <div className="group">
                  <h3 className="text-2xl font-semibold text-red-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Source of Energy
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    The energy source is a liquid-dominated geothermal reservoir located at depths typically ranging
                    from 1,000 to 3,000 meters below the surface. Production wells tap into this natural underground
                    reservoir of hot water and steam, heated by Earth's internal heat flux and maintained under high
                    pressure. The reservoir temperature and characteristics determine the optimal conversion technology—
                    either flash steam for high temperatures (&gt;180°C) or binary/ORC systems for moderate temperatures
                    (120-180°C).
                  </p>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-red-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Conversion Process
                  </h3>
                  <div className="text-slate-300 text-lg leading-relaxed space-y-3">
                    <p>
                      <strong className="text-white">Flash Steam Path (High Temperature):</strong> Hot brine from
                      production wells passes through a separator where controlled pressure reduction causes a portion
                      of the liquid to "flash" into steam. This high-pressure steam is directed to a steam turbine
                      connected to a generator, producing electricity. The separated liquid and condensed steam are
                      routed to the reinjection system.
                    </p>
                    <p>
                      <strong className="text-white">Binary/ORC Path (Moderate Temperature):</strong> For cooler brine,
                      a heat exchanger transfers thermal energy to a secondary working fluid (such as isopentane or
                      R-245fa) with a much lower boiling point. This working fluid vaporizes, drives a turbine-generator
                      set, and then condenses in a cooling system before repeating the cycle. The geothermal brine never
                      contacts the turbine, remaining in a closed loop.
                    </p>
                    <p>
                      Both paths include gas extraction systems to remove non-condensable gases (primarily CO₂ and H₂S),
                      silica precipitation control to prevent scaling, and corrosion-resistant materials throughout.
                      Cooling is achieved through wet cooling towers or air-cooled condensers depending on water
                      availability and environmental conditions.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-red-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Output & Grid Integration
                  </h3>
                  <div className="text-slate-300 text-lg leading-relaxed space-y-3">
                    <p>
                      The power plant produces continuous baseload electricity at the generator voltage (typically 11-15 kV),
                      which is then stepped up through a main power transformer to transmission voltage levels (69-230 kV)
                      for grid connection. Key characteristics include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-white">Capacity factor:</strong> 90-95%, far exceeding intermittent renewables</li>
                      <li><strong className="text-white">Dispatchability:</strong> Provides stable, predictable baseload power</li>
                      <li><strong className="text-white">Ramp capability:</strong> Can adjust output within operational limits</li>
                      <li><strong className="text-white">Lifetime:</strong> 30-50+ years with proper maintenance</li>
                    </ul>
                    <p>
                      The cooled brine, now at 40-80°C, is pumped through reinjection wells back into the geothermal
                      reservoir at different horizons or locations than the production wells. This maintains reservoir
                      pressure, disposes of spent fluid responsibly, and enables sustainable long-term operation.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-2xl font-semibold text-red-400 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Real-World Relevance
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Geothermal power plants provide low-carbon, reliable baseload electricity that complements variable
                    renewable sources like solar and wind. With lifecycle emissions comparable to wind power (typically
                    15-50 g CO₂-eq/kWh), geothermal offers true 24/7 clean energy without requiring energy storage or
                    backup power systems. Countries like Iceland, Kenya, New Zealand, and the Philippines derive
                    significant portions of their electricity from geothermal resources. Modern enhanced geothermal
                    systems (EGS) are expanding the technology's applicability beyond traditional volcanic regions,
                    potentially making geothermal power accessible to a much broader range of locations worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-rose-900/30 backdrop-blur-sm rounded-3xl border border-red-700/50 p-12 animate-fade-in-up delay-400">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-red-400 to-rose-500 rounded-full" />
                Quick Specs
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-sm text-slate-400 mb-2">{spec.label}</div>
                    <div className="text-xl font-bold text-white">{spec.value}</div>
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
    </div>
  );
}
