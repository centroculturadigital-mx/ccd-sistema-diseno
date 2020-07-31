const path = require('path');


// Export a function. Accept the base config as the only param.
module.exports = {
    webpackFinal: async (config, { configType }) => {
        
        config.module.rules=config.module.rules.map(rule => {
            if (
                String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/)
                ) {
                return {
                    ...rule,
                    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
                }
            }
            
            return rule
        }).map(rule => {
            const ruleTestString = rule.test.toString();
            if (/svg\|?/.test(ruleTestString)) {
            return {
                ...rule,
                test: new RegExp(
                ruleTestString
                    .replace(/svg\|?/, '') // Remove other svg rules
                    .replace(/\//, ''), // No "/" needed when creating a new RegExp
                ),
            };
            }
            return rule;
        })
            
        config.module.rules=[
            ...config.module.rules,
            {
                test: /\.svg$/i,
                use: [
                {
                    loader: 'svg-inline-loader',
                    options: {
                        removeSVGTagAttrs: false
                    },
                },
                ],
            },
        // console.log("sel",sel);
        
        ]
        // console.log(svgRules);
        // console.log("rules",config.module.rules);
        
        return config;
    },
    stories: [
        '../src/stories/**/*.stories.[tj]s',
    ],
};