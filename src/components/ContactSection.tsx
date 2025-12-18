import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['B & B Spot, Ground Floor', 'New No. 653 / Old No. 370', 'Periyar E. V. R. Salai (P. H. Road)', 'Chennai – 600106'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9884823838', '', ''],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@isolutionsfin.com', 'rajesh@isolutionsfin.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:30 AM - 6:30 PM', 'Sunday: Closed'],
    },
  ];

  const services = [
    'Home Funding',
    'Personal Funding',
    'Vehicle Funding',
    'Business Funding',
    'Insurance',
    'Investments',
    'Other',
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-navy to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-semibold mb-2 tracking-wider text-sm">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Start Your{' '}
            <span className="text-gradient-blue">Financial Journey</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to take the next step? Contact us today for a free consultation
            and discover how we can help you achieve your financial goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-card p-6 rounded-xl border border-border hover:border-secondary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-xl overflow-hidden bg-muted border border-border">
              <iframe
                src="https://maps.google.com/maps?q=B%20%26%20B%20Spot%2C%20Ground%20Floor%2C%20New%20No.%20653%20%2F%20Old%20No.%20370%2C%20Periyar%20E.%20V.%20R.%20Salai%20(P.%20H.%20Road)%2C%20Chennai%20%E2%80%93%20600106&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="iSolutions Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-card p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:border-secondary transition-colors"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
                  rows={8}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button variant="gold" size="lg" className="w-full">
                Send Message
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
