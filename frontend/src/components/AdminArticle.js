import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { Converter } from 'showdown';

function markdown2html(markdown) {
    return new Converter().makeHtml(markdown);
}

const useStyles = makeStyles({
    root: {
        textAlign: "center"
    },

}
});
