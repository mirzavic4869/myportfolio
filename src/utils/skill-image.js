// import * as adobeXd from "../assets/images/adobe-xd.svg";
import adobeaudition from "../assets/images/adobeaudition.svg";
import afterEffects from "../assets/images/after-effects.svg";
import angular from "../assets/images/angular.svg";
import aws from "../assets/images/aws.svg";
import azure from "../assets/images/azure.svg";
import blender from "../assets/images/blender.svg";
import bootstrap from "../assets/images/bootstrap.svg";
import bulma from "../assets/images/bulma.svg";
import c from "../assets/images/c.svg";
import canva from "../assets/images/canva.svg";
import capacitorjs from "../assets/images/capacitorjs.svg";
import coffeescript from "../assets/images/coffeescript.svg";
import cplusplus from "../assets/images/cplusplus.svg";
import csharp from "../assets/images/csharp.svg";
import css from "../assets/images/css.svg";
import dart from "../assets/images/dart.svg";
import deno from "../assets/images/deno.svg";
import django from "../assets/images/django.svg";
import docker from "../assets/images/docker.svg";
import fastify from "../assets/images/fastify.svg";
import figma from "../assets/images/figma.svg";
import firebase from "../assets/images/firebase.svg";
import flutter from "../assets/images/flutter.svg";
import gcp from "../assets/images/gcp.svg";
import gimp from "../assets/images/gimp.svg";
import git from "../assets/images/git.svg";
import go from "../assets/images/go.svg";
import graphql from "../assets/images/graphql.svg";
import haxe from "../assets/images/haxe.svg";
import html from "../assets/images/html.svg";
import illustrator from "../assets/images/illustrator.svg";
import ionic from "../assets/images/ionic.svg";
import java from "../assets/images/java.svg";
import javascript from "../assets/images/javascript.svg";
import julia from "../assets/images/julia.svg";
import kotlin from "../assets/images/kotlin.svg";
import lightroom from "../assets/images/lightroom.svg";
import markdown from "../assets/images/markdown.svg";
import materialui from "../assets/images/materialui.svg";
import matlab from "../assets/images/matlab.svg";
import memsql from "../assets/images/memsql.svg";
import microsoftoffice from "../assets/images/microsoftoffice.svg";
import mongoDB from "../assets/images/mongoDB.svg";
import mysql from "../assets/images/mysql.svg";
import nextJS from "../assets/images/nextJS.svg";
import nginx from "../assets/images/nginx.svg";
import numpy from "../assets/images/numpy.svg";
import nuxtJS from "../assets/images/nuxtJS.svg";
import opencv from "../assets/images/opencv.svg";
import photoshop from "../assets/images/photoshop.svg";
import php from "../assets/images/php.svg";
import picsart from "../assets/images/picsart.svg";
import postgresql from "../assets/images/postgresql.svg";
import premierepro from "../assets/images/premierepro.svg";
import python from "../assets/images/python.svg";
import pytorch from "../assets/images/pytorch.svg";
import react from "../assets/images/react.svg";
import ruby from "../assets/images/ruby.svg";
import selenium from "../assets/images/selenium.svg";
import sketch from "../assets/images/sketch.svg";
import strapi from "../assets/images/strapi.svg";
import svelte from "../assets/images/svelte.svg";
import swift from "../assets/images/swift.svg";
import tailwind from "../assets/images/tailwind.svg";
import tensorflow from "../assets/images/tensorflow.svg";
import typescript from "../assets/images/typescript.svg";
import unity from "../assets/images/unity.svg";
import vitejs from "../assets/images/vitejs.svg";
import vue from "../assets/images/vue.svg";
import vuetifyjs from "../assets/images/vuetifyjs.svg";
import webix from "../assets/images/webix.svg";
import wolframalpha from "../assets/images/wolframalpha.svg";
import wordpress from "../assets/images/wordpress.svg";

export const skillsImage = (skill) => {
	const skillID = skill.toLowerCase();
	switch (skillID) {
		case "gcp":
			return gcp;
		case "html":
			return html;
		case "photoshop":
			return photoshop;
		case "docker":
			return docker;
		case "illustrator":
			return illustrator;
		// case "adobe xd":
		// 	return adobeXd;
		case "after effects":
			return afterEffects;
		case "css":
			return css;
		case "angular":
			return angular;
		case "javascript":
			return javascript;
		case "next js":
			return nextJS;
		case "nuxt js":
			return nuxtJS;
		case "react":
			return react;
		case "svelte":
			return svelte;
		case "typescript":
			return typescript;
		case "vue":
			return vue;
		case "bootstrap":
			return bootstrap;
		case "bulma":
			return bulma;
		case "capacitorjs":
			return capacitorjs;
		case "coffeescript":
			return coffeescript;
		case "memsql":
			return memsql;
		case "mongodb":
			return mongoDB;
		case "mysql":
			return mysql;
		case "postgresql":
			return postgresql;
		case "tailwind":
			return tailwind;
		case "vitejs":
			return vitejs;
		case "vuetifyjs":
			return vuetifyjs;
		case "c":
			return c;
		case "c++":
			return cplusplus;
		case "c#":
			return csharp;
		case "dart":
			return dart;
		case "go":
			return go;
		case "java":
			return java;
		case "kotlin":
			return kotlin;
		case "julia":
			return julia;
		case "matlab":
			return matlab;
		case "php":
			return php;
		case "python":
			return python;
		case "ruby":
			return ruby;
		case "swift":
			return swift;
		case "adobe audition":
			return adobeaudition;
		case "aws":
			return aws;
		case "deno":
			return deno;
		case "django":
			return django;
		case "firebase":
			return firebase;
		case "gimp":
			return gimp;
		case "git":
			return git;
		case "graphql":
			return graphql;
		case "lightroom":
			return lightroom;
		case "materialui":
			return materialui;
		case "nginx":
			return nginx;
		case "numpy":
			return numpy;
		case "opencv":
			return opencv;
		case "premiere pro":
			return premierepro;
		case "pytorch":
			return pytorch;
		case "selenium":
			return selenium;
		case "strapi":
			return strapi;
		case "tensorflow":
			return tensorflow;
		case "webix":
			return webix;
		case "wordpress":
			return wordpress;
		case "azure":
			return azure;
		case "blender":
			return blender;
		case "fastify":
			return fastify;
		case "figma":
			return figma;
		case "flutter":
			return flutter;
		case "haxe":
			return haxe;
		case "ionic":
			return ionic;
		case "markdown":
			return markdown;
		case "microsoft office":
			return microsoftoffice;
		case "picsart":
			return picsart;
		case "sketch":
			return sketch;
		case "unity":
			return unity;
		case "wolframalpha":
			return wolframalpha;
		case "canva":
			return canva;
		default:
			break;
	}
};
