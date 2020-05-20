const mailTransport = require('../../config/mail');

class MailController {
  async store(req, res) {
    await mailTransport.sendMail({
      to: 'richardsampaio90@teste.com',
      from: 'richardsampaio90@teste.com',
      subject: 'teste de email',
      template: 'email',
      context: {
        message: 'Meu e-mail enviado pelo nodemailer',
      },
    });
    return res.status(201).json({ msg: 'E-mail enviado com sucesso' });
  }
}

module.exports = new MailController();
