const url = 'http://localhost:5000'
module.exports = {
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    green: '#FFB6C1',
                    blue: '#FFB6C1'
                    // red: '#03a9f4',
                    // blue: '#3eaf7c',
                    // orange: '#f08d49',
                    // 'text-color': '#111'
                }
            }
        }
    },
    devServer: {
        port: 8080,
        proxy: {
            '/api': {
                target: url,
                ws: true,
                changeOrigin: true
            },
            '/static': {
                target: url,
                ws: true,
                changeOrigin: true
            }
        }
    }
}