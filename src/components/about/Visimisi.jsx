import React from 'react';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

function Visimisi() {
  const { translate } = useLanguage();

  return (
    <div className="w-full">
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">{translate('about.vision.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img 
                src="https://sip-exim.co.id/uploads/sip/230503MOzB0bLPyGgCXRhFk6pDjraZovVlU4cEw5e7qimuf9TY2xsQSA8KdNn1H3JI.jpg" 
                alt={translate('about.vision.vision_title')}
                className="w-full h-32 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{translate('about.vision.vision_title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {translate('about.vision.vision_text')}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img 
                src="https://th.bing.com/th/id/OIP.T84PJ_BdwtJS8c7Dx9rykAAAAA?w=470&h=315&rs=1&pid=ImgDetMain" 
                alt={translate('about.vision.mission_title')}
                className="w-full h-32 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{translate('about.vision.mission_title')}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {translate('about.vision.mission_points').map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Visimisi;

