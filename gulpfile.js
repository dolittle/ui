require("babel-register");        
var pipeline = require("./gulp/tasks/default").default;
var config = pipeline.config;                                                                                                                                                                                                                                                                          
config.paths.rootDir = __dirname;                                                                                                                                                                                                                                                                      
config.paths.outputDir = config.paths.rootDir+"/wwwroot";                                                                                                                                                                                                                                              
config.paths.sourceDir = config.paths.rootDir+"/Source";
config.paths.specsDir = config.paths.rootDir+"/Specifications";