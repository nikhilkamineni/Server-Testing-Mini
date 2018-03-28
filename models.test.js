const mongoose = require('mongoose');
const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');

const Band = require('./models');

describe('Bands', () => {
  describe('getBandName', () => {
    it('should return the expect band name', () => {
      const band = new Band({
        name: 'Rush',
        genre: 'Alt-Rock',
      });
      expect(band.getBandName()).to.equal('Rush');
    });
  });

  describe('getAllBands', () => {
    it('should return all the bands', () => {
      sinon.stub(Band, 'find');
      Band.find.yields(null, [
        { name: 'Rush', genre: 'Alt-Rock' },
        { name: 'Camel', genre: 'Prog' },
      ]);
      Band.getAllBands(bands => {
        expect(bands.length).to.equal(2);
        expect(bands[1].name).to.equal('Camel');
        Band.find.restore();
      });
    });
  });
});
