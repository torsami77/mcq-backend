/* eslint-disable max-len */
/* eslint-disable camelcase */
import models from '../models';
import { successResponse, errorResponse } from '../utils/index';

const association = [
  {
    model: models.Questions,
    as: 'questions',
    attributes: ['id', 'story_id', 'question', 'option_1', 'option_2', 'option_3', 'option_4']
  }
];

/**
 * @class Stories
 * @description Controllers for Stories
 * @exports Stories
 */
export default class Stories {
  /**
  * @method writeExams
  * @description Method to fetch all writeExams
  * @param {object} req - The Request Object
  * @param {object} res - The Response Object
  * @returns {object} 2 randomly picked passages
  */
  static async writeExams(req, res) {
    try {
      const one = Math.floor(Math.random() * 5) + 1;
      const two = Math.abs(one - 4) + 1;
      const result1 = await models.Stories.findAll({
        where: { id: one }, include: association
      });
      const result2 = await models.Stories.findAll({
        where: { id: two }, include: association
      });
      return successResponse(res, 200, 'Randomly picked passages', [result1[0], result2[0]]);
    } catch (error) {
      return errorResponse(res, 500, 'Error getting passages');
    }
  }
}
