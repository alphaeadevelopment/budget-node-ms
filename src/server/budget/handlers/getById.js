import dao from './budget-dao';

export default (req, res) => {
  dao.getById(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(e => res.status(500).send(e));
}
