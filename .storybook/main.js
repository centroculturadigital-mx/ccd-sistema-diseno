const path = require('path');

const svgRules = {
    test: /\.svgmap$/,
    loader: '/home/furenku/chamba/CCD/2020/proyectos/ccd-sistema-diseno/node_modules/svg-inline-loader/index.js',
    options: {
      removeSVGTagAttrs: false
    },
    include: path.resolve(__dirname, '../'),

  }


// Export a function. Accept the base config as the only param.
module.exports = {
    webpackFinal: async (config, { configType }) => {
        let sel
        config.module.rules=config.module.rules.map((r,i)=>{
            let svgIndex = String(r.test).indexOf("svg")
            if( svgIndex >= 0 ) {
                sel = String(r.test).substring(0,svgIndex);
                sel += String(r.test).substring(svgIndex+4);
                // r.test=(sel)
            }

            return r
        })

        // console.log("sel",sel);
        

        // console.log(svgRules);
        config.module.rules.push(svgRules)
        // console.log("rules",config.module.rules);
        
        return config;
    },
    stories: [
        '../src/stories/**/*.stories.[tj]s',
    ],
};