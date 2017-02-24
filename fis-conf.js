// 设置项目属性
// fis.set('project.name', 'fis3-base');
fis.set('project.static', '/static');
// fis.set('project.files', ['*.html', 'map.json', '/test/*']);


fis.hook('module', {
    mode: 'mod',
    paths : {
        'main': 'components/component/main' 
    }
});

// 开启同名依赖
fis.match('/components/**', {
    useSameNameRequire: true
});

// ------ 配置components
fis.match('/components/**', {
    release: '${project.static}/$&'
});
fis.match('/components/**.css', {
    isMod: true,
    release: '${project.static}/$&'
});
fis.match('/components/**.js', {
    isMod: true,
    release: '${project.static}/$&'
});

//doc目录不发布
fis.match("test/**", {
    release: false
});
fis.match("*.md", {
    release: false
});

fis.match("/component_modules/*.js", {
    isMod: true,
    useMap: true,
    release: '/static/$0'
});

//component组件资源id支持简写
fis.match(/^\/components\/component\/(.*)$/i, {
    id : '$1'
});

//page里的页面发布到根目录
fis.match("components/page/(*.html)",{
    release: '/$1',
    useCache : false
});

// less编译
fis.match('**/*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
})

//文章封面和作者头像等动态图片地址不加hash
/*fis.match(/static\/images\/.*\.(jpeg|jpg|png)$/,{
    useHash: false
})*/


fis.match('::packager', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        useInlineMap: true // 资源映射表内嵌
    }),
    packager: fis.plugin('map'),
    spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        margin: '5'
    })
    
}).match('**/*.{css,less}', {
    packTo: '/static/pkg/all.css' //css打成一个包
})

fis.media('debug').match('*.{js,css,png}', {
  useHash: false,
  useSprite: false,
  optimizer: null
})

//生产环境下CSS、JS压缩合并
//使用方法 fis3 release prod
fis.media('prod')
    .match('**.js', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('component_modules/*.js',{
        packTo: '/static/pkg/common.js' 
    })
    .match('js/vendor/*.js',{
        packTo: '/static/pkg/vendor.js' 
    })
    .match('components/**/*.js',{
        packTo: '/static/pkg/app.js'
    })
    .match('**.css', {
        optimizer: fis.plugin('clean-css')
    });
