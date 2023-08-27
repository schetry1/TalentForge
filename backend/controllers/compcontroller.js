//company reg

const CompModel=require('../models/companymodel');

exports.getcompDetails = async (req, res) => {
  try {
    const details = await CompModel.find();
    return res.render("company/index", { details });
  } catch (error) {
    console.log(error.message);
  }
};

exports.addcompForm = async (req, res) => {
  try {
    return res.render("company/add");
  } catch (error) {
    console.log(error.message);
  }
};

exports.postcompDetails = async (req, res) => {
  try {
    var { compname , email , location , about , website , phone , linkedin } = req.body;

    const image = '/uploads/' + req.file.filename;
    console.log(image)
    //console.log(path);
    const newcompDetail = await new CompModel({
      compname,
      email,
      location,
      about,
      website,
      phone,
      linkedin,
      image,
    }).save();
   
    return res.redirect("profile");
  } catch (error) {
    console.log(error.message);
  }
};


//opportunity addition

const OppModel=require('../models/opportunitymodel');

exports.getoppDetails = async (req, res) => {
    try {
      const opps = await OppModel.find();
      return res.render("company/oppindex", { opps });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  exports.addoppForm = async (req, res) => {
    try {
      return res.render("company/opp");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  exports.postoppDetails = async (req, res) => {
    try {
      var { jobname , duration , location ,stipend, requirements , tags , process , link , perks,openings,info} = req.body;
  
      
     
      //console.log(path);
      const newoppDetail = await new OppModel({
        jobname, 
        duration, 
        location, 
        stipend,
        requirements, 
        tags, 
        process, 
        link, 
        perks,
        openings,
        info,
      }).save();
     
      return res.redirect("addopp");
    } catch (error) {
      console.log(error.message);
    }
  };